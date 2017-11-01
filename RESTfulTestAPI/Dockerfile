FROM openjdk:latest

COPY . /source

WORKDIR /source

ENTRYPOINT ["java", "-jar", "build/libs/gs-rest-service-0.1.0.jar", "--server.port=8090"]