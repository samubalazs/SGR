import axios from "axios"

import { RepositoryData } from "../types"

async function fetchRepositories() {
  const { data } = await axios.get(
    "https://api.github.com/search/repositories?q=topic:typescript&state:open&sort=created&order=asc"
  )
  const result =
    data &&
    data.items.reduce(
      (acc: RepositoryData[], curr: any) => [
        ...acc,
        {
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
          ownerUrl: curr.owner.url,
          ownerAvatar: curr.owner.avatar_url,
        },
      ],
      []
    )
  return data ?? []
}

export default fetchRepositories
