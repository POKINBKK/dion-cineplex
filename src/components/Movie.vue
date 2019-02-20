<template>
  <!--ตัววนfor แสดงหนังทั้งหมดในหน้า home-->
  <div id="movie-container">
    <el-row class="movie-col">
      <el-col :span="12">
        <el-select v-model="value" placeholder="All" style="float:left">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="12">
          <el-input style="float:right; width:40%" placeholder="Search" v-model="input"></el-input>
      </el-col>
    </el-row>
    <el-row class="movie-row" justify="space-around" :gutter="20">
      <el-col :span="6" v-for="item1 in movieSearchResult1" :key="item1.movieId">
        <MovieCard
          v-if="value==''||value=='all'"
          v-bind:title="item1.movieTitle"
          v-bind:date="item1.showDate"
          v-bind:picpath="item1.movieThumbnails"
          class="movie-col"
        ></MovieCard>
        <MovieCard
          v-else-if="value==item1.genre"
          v-bind:title="item1.movieTitle"
          v-bind:date="item1.showDate"
          v-bind:picpath="item1.movieThumbnails"
          class="movie-col"
        ></MovieCard>
      </el-col>
      <el-col :span="6" v-for="item2 in movieSearchResult2" :key="item2.movieId">
        <MovieCard
          v-if="value==''||value=='all'"
          v-bind:title="item2.movieTitle"
          v-bind:date="item2.showDate"
          v-bind:picpath="item2.movieThumbnails"
          class="movie-col"
        ></MovieCard>
        <MovieCard
          v-else-if="value==item2.genre"
          v-bind:title="item2.movieTitle"
          v-bind:date="item2.showDate"
          v-bind:picpath="item2.movieThumbnails"
          class="movie-col"
        ></MovieCard>
        
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MovieCard from "./MovieCard";
import json from "../assets/movielist.json";
export default {
  name: "Movie",
  components: {
    MovieCard
  },
  data() {
    return {
      input: '',
      movieList: json,
      options: [
        {
          value: "all",
          label: "All"
        },
        {
          value: "Adventure",
          label: "Adventure"
        },
        {
          value: "Action",
          label: "Action"
        },
        {
          value: "Horror",
          label: "Horror"
        },
        {
          value: "Animation",
          label: "Animation"
        },
        {
          value: "Biography",
          label: "Biography"
        }
      ],
      value: "",
      links: [],
      state4: "",
      timeout: null,
      values:[],
    };
  },
  methods: {
    loadAll() {
      for(var key in this.movieList.nowShowingList){
    this.values.push( {value: this.movieList.nowShowingList[key].movieTitle});
  }
  for(var key in this.movieList.comingSoonList){
    this.values.push( {value: this.movieList.comingSoonList[key].movieTitle});
  }
  return this.values
    },
    querySearchAsync(queryString, cb) {
      var links = this.links;
      var results = queryString
        ? links.filter(this.createFilter(queryString))
        : links;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createFilter(queryString) {
      return link => {
        return (
          link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.links = this.loadAll();
  },
  computed:{
          movieSearchResult1(){
            return this.movieList.nowShowingList.filter(movie => {
              let searchtext = this.input.toLowerCase()
              let isintitle = movie.movieTitle.toLowerCase().includes(searchtext)
              return isintitle
            })
          },
          movieSearchResult2(){
            return this.movieList.comingSoonList.filter(movie => {
              let searchtext = this.input.toLowerCase()
              let isintitle = movie.movieTitle.toLowerCase().includes(searchtext)
              return isintitle
            })
          }
        },
};
</script>

<style scoped>
.movie-col {
  margin-bottom: 2em;
}
</style>