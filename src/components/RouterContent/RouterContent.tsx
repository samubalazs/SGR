import { Route, Routes } from "react-router-dom"

import { Home } from "../../containers/Home"

export const RouterContent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="search" element={<Home />} />
        <Route path="history" element={<Home />} />
        <Route path="desktop" element={<Home />} />
        <Route path="mobile" element={<Home />} />
      </Route>
    </Routes>
  )
}
