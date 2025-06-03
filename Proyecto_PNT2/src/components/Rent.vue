<script setup>
import { ref, computed, onMounted } from 'vue';


const movies = ref([])
const filterMovie = ref('')

onMounted(async () => {
    console.log('Montando componente Rent');
    console.log('Obteniendo peliculas...');
    try {
        const res = await fetch('https://api.andrespecht.dev/movies');
        if (!res.ok) {
            throw new Error('La respuesta no fue ok');
        }
        const data = await res.json();
        movies.value = data.response;
    } catch (error) {
        console.error('Error obteniendo peliculas:', error);
    }
        });
 
const filteredMovies = computed(() => {
    return movies.value.filter(movie => 
        movie.title.toLowerCase().includes(filterMovie.value.toLowerCase())
    );
});

</script>
<template>
    <div class="container-fluid text-center">
        <h2>Alquilar Peliculas</h2>
        </br />
        <label for="filter">Filtrar Peliculas: </label>
        <p></p>
        <input type="text" v-model="filterMovie" placeholder="Buscar por titulo..." />
        <p></p>
        <button @click="rentMovie">Alquilar</button>
    <div class="cointainer text-center">
        <ul class="list-unstyled d-flex flex-wrap justify-content-center">
            <li v-for="movie in filteredMovies" :key="movie.id">
                <div class="card">
                    <h4>{{ movie.title }}</h4>
                    <img class="" :src="movie.poster" alt="Poster de la pelicula" style="width: 100px; height: 150px;" />
                    <p>Año: {{ movie.year }}</p>   
                </div>
            </li>
        </ul>
    </div>
    <p v-if="filteredMovies.length === 0">No se encontraron peliculas con ese nombre</p>
</div>
</template>
<style scoped>

.card {
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}
button:hover {
    background-color: #45a049;
}

.card img {
    max-width: 100%;
    height: auto;
}

</style>