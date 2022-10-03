import { Route, Routes } from "react-router-dom"

import { Search } from "../../containers/Search"

export const RouterContent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />}>
        <Route path="search" element={<Search />} />
        <Route path="history" element={<Search />} />
        <Route path="desktop" element={<Search />} />
        <Route path="mobile" element={<Search />} />
      </Route>
    </Routes>
  )
}
