export type RepositoryData = {
  id: number
  name: string
  fullName?: string
  url: string
  stars: number
  watchers: number
  forks: number
  issues: number
  description?: string
  language?: string
  topics?: string[]
  created: string
  updated: string
  ownerName: string
  ownerUrl: string
  ownerAvatar: string
}

export type FormData = {
  searchBy: string
  searchIn: string[]
}
