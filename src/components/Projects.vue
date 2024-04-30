<template>
    <section id="projects" class="projects-section">
        <div class="container">
            <h2 class="title">My Projects</h2>
            <!-- Use transition-group to wrap all project cards -->
            <transition-group name="project-fade" tag="div" class="project-grid">
                <!-- Project cards go here -->
                <div class="project-card" v-for="project in projects" :key="project.id">
                    <img v-lazy="project.imageUrl" :alt="project.title" @load="imageLoaded">
                    <div class="project-info">
                        <h3>{{ project.title }}</h3>
                        <p>{{ project.description }}</p>
                        <a :href="project.url" target="_blank">View Project</a>
                    </div>
                </div>
            </transition-group>
        </div>
    </section>
</template>


<script>
    export default {
        name: 'ProjectsSection',
        data() {
            return {
                projects: [
                    {
                        id: 1,
                        title: 'Full-Stack Personal Finance App',
                        description: 'Stay Up With Your Spending and Saving Habits with Lozenge.',
                        imageUrl: require('@/images/lozenge.png'),
                        url: 'http://link-to-project-one.com'
                    },
                    {
                        id: 2,
                        title: 'Apple Quality Predictor',
                        description: 'Is the apple good or bad? I went seriously overkill on a pretty big neural net to be 99+% sure.',
                        imageUrl: require('@/images/dataset-cover.jpeg'),
                        url: 'https://colab.research.google.com/drive/10BJBk8OqhmOk2OAJ6aWPxhbsgpq018xW#scrollTo=qJ5kVpKL66g4'
                    },
                    {
                        id: 2,
                        title: 'Mock Forfeit App',
                        description: 'I really like the Forfeit App, but I wanted to build one for personal use customized to my preferences.',
                        imageUrl: require('@/images/forfeit.png'),
                        url: 'http://link-to-project-one.com'
                    },
                    // Add more project objects here
                ]
            };
        },
        methods: {
            imageLoaded(event) {
                event.target.classList.add('loaded');
            }
        }

    };
</script>

<style scoped>
    .project-fade-enter-active, .project-fade-leave-active {
        transition: opacity 1s;
    }

    .project-fade-enter, .project-fade-leave-to /* .project-fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    .project-card img {
        transition: opacity 0.5s ease-in-out;
        opacity: 0;
    }

        .project-card img.loaded {
            opacity: 1;
        }

    .projects-section {
        padding: 4rem 0;
        background-color: #b3cde0;
        color: #03396c;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }

    .title {
        text-align: center;
        margin-bottom: 2rem;
    }

    .project-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1rem;
    }

    .project-card:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }


    .project-card {
        background-color: white;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease-in-out;
        overflow: hidden;
    }

        .project-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

    .project-info {
        padding: 1rem;
    }

        .project-info h3 {
            margin-top: 0.5rem;
            font-size: 1.25rem;
        }

        .project-info p {
            font-size: 1rem;
            margin-top: 0.5rem;
            margin-bottom: 1rem;
        }

        .project-info a {
            text-decoration: none;
            color: #3498db;
            font-weight: 600;
        }

            .project-info a:hover {
                text-decoration: underline;
            }

    .project-card:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }
</style>
