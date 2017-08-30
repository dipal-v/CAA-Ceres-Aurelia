node('master') {
    environment {
        PATH = "$WORKSPACE/node-v6.11.2-linux-x64/bin:$PATH"
    }
    stage('Prepare') {
        git branch: 'webpack', url: 'git@github.com:Inmarsat-itcloudservices/CAA-Ceres-Aurelia.git', credentialsId:'52f7bc86-17fd-489c-815f-bfa89ab3e416'
        sh "curl https://nodejs.org/dist/v6.11.2/node-v6.11.2-linux-x64.tar.xz -o tmp.tar.xz"
        sh "tar xf tmp.tar.xz"
        env.PATH = "${WORKSPACE}/node-v6.11.2-linux-x64/bin:${env.PATH}"
        sh "npm install"
    }
    stage('Test'){
      parallel (
        "Jest": { 
            env.PATH = "${WORKSPACE}/node-v6.11.2-linux-x64/bin:${env.PATH}"
            sh "npm test"
        },
        "Cucumberjs": { 
            env.PATH = "${WORKSPACE}/node-v6.11.2-linux-x64/bin:${env.PATH}"
            sh "npm start -- e2e"
        }
      )
    }
    stage('Deploy'){
        sh "rm -rf node-v6.11.2-linux-x64/"
    }
}