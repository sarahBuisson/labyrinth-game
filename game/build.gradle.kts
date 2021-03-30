plugins {
    kotlin("multiplatform")
    id("maven-publish")
    kotlin("plugin.serialization")
}

group = "me.sarahbuisson"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

kotlin {
    jvm {
        compilations.all {
            kotlinOptions.jvmTarget = "1.8"
        }
        testRuns["test"].executionTask.configure {
            useJUnit()
        }
    }
    js {
        browser {
            binaries.executable()
            testTask {
                useKarma {
                    useChromeHeadless()
                    webpackConfig.cssSupport.enabled = true
                }
            }
        }
    }
    sourceSets {
        val commonMain by getting {
            kotlin.srcDir("src/main/kotlin")
            resources.srcDir("src/main/resource")
            dependencies {
                implementation(kotlin("stdlib"))
                implementation("io.github.microutils:kotlin-logging:" + extra.properties["kotlin_logging_version"])
                implementation("org.jeasy:easy-rules-core:" + extra.properties["rules_version"])
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.1.0")
            }
        }
        val commonTest by getting {
            kotlin.srcDir("src/test/kotlin")
            resources.srcDir("src/test/resource")
            dependencies {
                implementation("io.github.microutils:kotlin-logging:" + extra.properties["kotlin_logging_version"])

                implementation(kotlin("test-common"))
                implementation(kotlin("test-annotations-common"))
                implementation("io.mockk:mockk:" + extra.properties["mockkVersion"])
            }
        }
        val jvmMain by getting {
            dependencies {
                implementation("io.github.microutils:kotlin-logging-jvm:" + extra.properties["kotlin_logging_version"])
                implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
                implementation("org.jeasy:easy-rules-core-jvm:" + extra.properties["rules_version"])
            }
        }
        val jvmTest by getting {
            dependencies {
                implementation(kotlin("test-junit"))
            }
        }
        val jsMain by getting {
            dependencies {
                implementation("io.github.microutils:kotlin-logging-js:" + extra.properties["kotlin_logging_version"])
                implementation("org.jetbrains.kotlin:kotlin-stdlib-js")
                implementation("org.jeasy:easy-rules-core-js:" + extra.properties["rules_version"])
            }
        }
        val jsTest by getting {
            dependencies {
                implementation(kotlin("test-js"))
            }
        }
    }
}
