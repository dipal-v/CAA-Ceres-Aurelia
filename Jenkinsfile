node('master') {
    stage('Prepare') {
        sh "npm install"
    }
    stage('Test'){
      parallel (
        "Jest": { 
            sh "npm test"
        },
        "Cucumberjs": { 
            sh "npm start -- e2e"
        }
      )
    }
    stage('Deploy'){
        sh "echo deployment"
    }
}