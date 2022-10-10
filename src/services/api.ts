import axios from "axios"

import { RepositoryData } from "../types"

const buildResult = (response: any): RepositoryData[] => {
  let responseData: RepositoryData[] = []
  if (response) {
    response.map((curr: any) =>
      responseData.push({
        id: curr.id,
        name: curr.name,
        fullName: curr.full_name,
        url: curr.html_url,
        stars: curr.stargazers_count,
        watchers: curr.watchers,
        forks: curr.forks,
        issues: curr.open_issues,
        description: curr.description,
        language: curr.language,
        topics: curr.topics,
        created: curr.created_at,
        updated: curr.updated_at,
        ownerName: curr.owner.login,
        ownerUrl: curr.owner.html_url,
        ownerAvatar: curr.owner.avatar_url,
      })
    )
  }
  return responseData
}

async function fetchRepositories(searchQuery: string) {
  await axios
    .get(
      `https://api.github.com/search/repositories?q=${searchQuery}+state:open&sort=created&order=asc`
    )
    .then((resp) => resp.data)
}

export default fetchRepositories
