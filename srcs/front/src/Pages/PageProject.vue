<template>
    <h1> Mes project </h1>
    <div class="hello">
      <div class="project" v-if="localRepositories && localRepositories.length > 0">
        <a v-for="repository in localRepositories" :key="repository.name" :href="repository.html_url" class="display">
          <div class="display-content">
            <p class="singleLine">
              <img class="photo" :src="repository.avatar_url" />
              {{ repository.name }}
            </p>
            <p class="description-editing">{{ repository.description }}</p>
          </div>
        </a>
      </div>
    </div>
</template>

<script>
import { Octokit } from "@octokit/core";

class GitHubRepository {
  constructor(data) {
    this.name = data.name;
    this.avatar_url = data.owner.avatar_url;
    this.html_url = data.html_url;
    this.description = data.description;
  }
}

export default {
  name: 'PageProject',
  props: {
    msg: String,
  },
  data() {
    return {
      localRepositories: [],
    };
  },
  mounted() {
    const octokit = new Octokit({
      auth: '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',
      visibility: 'public',
      owner: 'zarakel',
      user: 'zarakel'
    });

    octokit.request('GET /user/repos', {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
    .then((response) => {
      this.localRepositories = response.data.map((repository) => new GitHubRepository(repository));
    })
    .catch((error) => {
      console.error(error);
    });
  }
}
</script>

<!-- Ajoutez l'attribut "scoped" pour limiter le CSS à ce composant uniquement -->
<style scoped>

.hello {
  display: flex;
  flex-direction: column;
  min-height: fit-content;
  height: fit-content;
  max-height: fit-content;
  max-width: 100%;
  width: 100%;
  min-width: fit-content;
}

h1 {
  color: #42b983;
  font-style: italic;
  font-size: 2rem;
}

.project{
  display: grid;
  grid: repeat(2, auto) / repeat(2, 40%);
  column-gap : 20px;
  row-gap: 20px;
  justify-items: center;
  justify-content: center;
  min-height: fit-content;
  height: fit-content;
  max-height: fit-content;
}

.display {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  justify-content: center;
  height: fit-content;
} 

.photo {
  width: 40px;
  height: 40px;
  border: #42b983;
  border-radius: 100%;
}

.singleLine{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  top: 1%
}
.description-editing{
  font-size: 0.9rem;
  text-align: justify;
  text-justify: auto;
  margin-left: auto;
  margin-right: auto;
  width: 90%;

}
 /* unvisited link */
 a:link {
  color: #42b983;
  background-color: rgba(207, 206, 206, 0.308);
  border-color: rgba(128, 128, 128, 0.445);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-sizing: content-box;
  text-decoration: none;
}

visited link
a:visited {
  color: green;
}

/* mouse over link */
a:hover {
  background-color: #d3d3d3;
    -webkit-transition: background-color 500ms linear;
    -ms-transition: background-color 500ms linear;
    transition: background-color 500ms linear;
}

/* selected link */
a:active {
  color: blue;
} 

</style>
