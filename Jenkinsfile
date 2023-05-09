pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        // Checkout the source code from Git
        git 'https://github.com/Nishanth-Gowda/Portfolio-charitha.git'
      }
    }
    
    stage('Build and Push Docker Image') {
      steps {
        // Build the Docker image
        script {
          docker.withRegistry('https://your-docker-registry', 'your-registry-credentials') {
            def imageName = "portfolio-charitha"
            def imageTag = "${env.BUILD_NUMBER}"
            
            // Build the Docker image
            docker.build(imageName, "-t ${imageName}:${imageTag} .")
            
            // Push the Docker image to the registry
            docker.image(imageName).push("${imageName}:${imageTag}")
          }
        }
      }
    }
  }
}
