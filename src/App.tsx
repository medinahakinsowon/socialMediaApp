
import './globals.css'
import { Routes, Route } from 'react-router-dom'
import SigninForm from './_auth/forms/SigninForm'
import { AllUsers, 
  CreatePost, 
  Explore, 
  Home, 
  PostDetails, 
  Profile, 
  Saved, 
  UpdatePost, 
  UpdateProfile } from './_root/pages'
import SignUp from './_auth/forms/SignUp'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { Toaster } from "@/components/ui/toaster"

const App = () => {
  return (
    <main className='flex  h-screen'>
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path='sign-in' element={<SigninForm />} />
          <Route path='sign-up' element={<SignUp />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout/>}>
           <Route index element={<Home/>} />
           <Route path="/explore" element={<Explore/>} />
           <Route path="/saved" element={<Saved/>} />
           <Route path="/all-users" element={<AllUsers/>} />
           <Route path="/create-post" element={<CreatePost/>} />
           <Route path="/update-post/:id" element={<UpdatePost/>} />
           <Route path="/post/:id" element={<PostDetails/>} />
           <Route path="/profile/:id/*" element={<Profile/>} />
           <Route path="/update-profile/:id" element={<UpdateProfile/>} />
        </Route> 
      </Routes>
      <Toaster/>
    </main>
  )
}

export default App
function express() {
  throw new Error('Function not implemented.');
}

