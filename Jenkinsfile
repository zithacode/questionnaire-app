pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build Angular') {
            steps {
                sh 'npm run build'
            }
        }
      stage('Deploy') {
        steps {
          sh 'cp -r dist/questionnaire-app/. /var/www/html/'
        }
      }
    }
}
