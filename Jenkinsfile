pipeline {
    agent {
        docker {
            image 'qawolf/qawolf:v0.9.3-alpha.0'
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
                sh 'npx qawolf test --all-browsers'
            }
        }
    }
    post {
        always {
            archiveArtifacts(artifacts: 'artifacts/**/*.*', fingerprint: true) 
        }
    }
}