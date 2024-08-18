pipeline {
    agent any
    stages {
        stage('Checkout SCM') {
            steps {
                git 'https://github.com/florencered/Online_Bookstore.git'
            }
        }
        stage('Build') {
            steps {
                bat 'echo Building...'
            }
        }
        stage('Test') {
            steps {
                bat 'echo Testing...'
            }
        }
    }
}
