pipeline {
    agent {
        docker {
            image 'qawolf/playwright-ci:v1.0.0'
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
                QAW_ARTIFACT_PATH = './artifacts'
            }
            steps {
                // Start local server
                sh 'npm run start & npx wait-on http://localhost:3000'
                sh 'npx qawolf test --headless'
            }
        }
        post {
            always {
                archiveArtifacts(artifacts: 'artifacts/**/*.*', fingerprint: true) 
            }
        }
    }
}