import {inter} from '@/app/ui/fonts'
import SideNav from '@/app/ui/dashboard/sidenav';
import Page from '@/app/dashboard/page'
import Signup from '@/app/signup/page'
import TodoList from '@/app/dashboard/todos/page';
// import Login from '@/app/dashboard/login/page'/
// import { mongoose } from '../../Mongo'; 
// import Datab from '../../Mongo';
// import '@/app/dashboard/api/Users/user'
// import Post from '@/app/dashboard/api/Users/user';
export default function Layout({ children }: { children: React.ReactNode }) {
  return  (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow md:overflow-y-auto">{children}</div>
    </div>
  );
} 
