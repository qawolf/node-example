pipeline {
    agent {
        docker {
            image 'circleci/node:12.14.0-browsers'
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            environment { 
                // configure tests with environment variables
                // https://docs.qawolf.com/docs/configuration
                QAW_ARTIFACT_PATH = './artifacts'
            }
            steps {
                sh 'rm -rf ./artifacts' // delete old artifacts
                sh 'npm run start & npx wait-on http://localhost:3000'
                sh 'npx qawolf test'
            }
        }
    }
    post {
        always {
            archiveArtifacts(artifacts: 'artifacts/**/*.*', fingerprint: true) 
        }
    }
}