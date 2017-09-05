def getColor(String buildStatus){
    if (buildStatus == 'STARTED') {
        return '#7b8e9d'
    } else if (buildStatus == 'SUCCESS') {
        return '#00990D'
    } else if (buildStatus == 'UNSTABLE') {
        return '#ffa31a'
    } else {
        return '#ff0004'
    }
}

def notifySlack(String stageName='Prepare', String buildStatus = 'STARTED') {
    // Build status of null means success.
    buildStatus = buildStatus ?: 'SUCCESS'

    def color = getColor(buildStatus)

    def msg = "${stageName} - ${buildStatus}: `${env.JOB_NAME}` #${env.BUILD_NUMBER}:\n${env.BUILD_URL}"

    slackSend(color: color, message: msg)
}

node('master') {
    environment {
        PATH = "$WORKSPACE/node-v8.4.0-linux-x64/bin:$PATH"
    }
    stage('Prepare') {
        def stageName = 'Prepare'
        try{
            notifySlack()
            sh "rm -rf node-v8.4.0-linux-x64/"
            sh "rm -rf node_modules"
            checkout scm
            sh "tar xf dependencies/node-v8.4.0-linux-x64.tar.xz"
            env.PATH = "${WORKSPACE}/node-v8.4.0-linux-x64/bin:${env.PATH}"
            sh "npm install"
        }catch(e){
            currentBuild.result = 'FAILURE'
            throw e
        }finally{
            notifySlack(stageName, currentBuild.result)
        }
    }
    stage('Test'){
      parallel (
        "Jest": { 
            def stageName = 'Jest - Unit Test'
            try{
                env.PATH = "${WORKSPACE}/node-v8.4.0-linux-x64/bin:${env.PATH}"
                sh "npm test"
            }catch(e){
               currentBuild.result = 'FAILURE'
                throw e
            }finally{
                notifySlack(stageName, currentBuild.result)
            }
        },
        "Cucumberjs": {
            def stageName = 'Cucumberjs - BDD test'
            try{
                env.OAUTH_BASE = "http://localhost:3000"
                env.OAUTH_URL = "/fakeoauth"
                env.OAUTH_CLIENTID = "dummy"
                env.PATH = "${WORKSPACE}/node-v8.4.0-linux-x64/bin:${env.PATH}"
                sh "npm start -- e2e"
            }catch(e){
               currentBuild.result = 'FAILURE'
                throw e
            }finally{
                notifySlack(stageName, currentBuild.result)
            }
        }
      )
    }
    stage('Deploy'){
        def stageName = 'Deploy - Cleanning up'
        try{
            junit 'junit.xml'
            sh "cat protractor-report.json | ./node_modules/.bin/cucumber-junit > protractor-junit.xml"
            junit 'protractor-junit.xml'
            step([$class: 'CoberturaPublisher', autoUpdateHealth: false, autoUpdateStability: false, coberturaReportFile: 'test/coverage-jest/cobertura-coverage.xml', failUnhealthy: false, failUnstable: false, maxNumberOfBuilds: 0, onlyStable: false, sourceEncoding: 'ASCII', zoomCoverageChart: false])
        }catch(e){
           currentBuild.result = 'FAILURE'
            throw e
        }finally{
            notifySlack(stageName, currentBuild.result)
        }
    } 
}
