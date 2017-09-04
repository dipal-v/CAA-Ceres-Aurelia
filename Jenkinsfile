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
                env.NACL_PLUGIN_DEBUG = "1"
                env.NACL_SRPC_DEBUG = "255"
                env.NACLVERBOSITY = "255"
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
            sh "rm -rf node-v8.4.0-linux-x64/"
        }catch(e){
           currentBuild.result = 'FAILURE'
            throw e
        }finally{
            notifySlack(stageName, currentBuild.result)
        }
    } 
}
