pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                // cannot change workdir or user with docker agent so we use docker manually
                // https://github.com/jenkinsci/docker-workflow-plugin/pull/57#issuecomment-621501006
                sh 'docker build -t qawolf-tests .'
                sh 'docker run --rm --ipc=host --security-opt seccomp=chrome.json -v $PWD/artifacts:/home/pwuser/artifacts qawolf-tests'
            }
        }
    }
    post {
        always {
            archiveArtifacts(artifacts: 'artifacts/**/*.*', fingerprint: true) 
        }
    }
}