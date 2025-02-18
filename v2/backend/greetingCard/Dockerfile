# Stage 1: Build the application using Gradle Wrapper
FROM openjdk:17-jdk-slim AS build

# Install dependencies for building
RUN apt-get update && apt-get install -y wget unzip && rm -rf /var/lib/apt/lists/*

# Install Gradle manually
ENV GRADLE_VERSION=8.3
RUN wget https://services.gradle.org/distributions/gradle-${GRADLE_VERSION}-bin.zip \
    && unzip gradle-${GRADLE_VERSION}-bin.zip -d /opt \
    && ln -s /opt/gradle-${GRADLE_VERSION}/bin/gradle /usr/bin/gradle \
    && rm gradle-${GRADLE_VERSION}-bin.zip

# Set the working directory
WORKDIR /app

# Copy Gradle wrapper scripts and configuration files
COPY gradlew .
COPY gradle gradle
COPY build.gradle settings.gradle ./

# Ensure gradlew is executable
RUN chmod +x gradlew

# Download dependencies without running tests
RUN ./gradlew build -x test --no-daemon || true

# Copy the source code
COPY src src

# Build the application without running tests
RUN ./gradlew clean build -x test --no-daemon --stacktrace

# Stage 2: Run the application using OpenJDK 21
FROM openjdk:21-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build /app/build/libs/*.jar app.jar

# Expose the application port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]