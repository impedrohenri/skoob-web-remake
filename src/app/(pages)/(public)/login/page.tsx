import { Metadata } from 'next';
import Section from "@/components/section/Section";
import LoginForm from './_components/LoginForm';
import LogoSideLayer from './_components/logoSideLayer/logoSideLayer';

export const metadata: Metadata = {
  title: 'Login'
};

export default function LoginPage() {
  return (
    <>
      <div className='flex flex-wrap h-[100vh]'>
        <LogoSideLayer />

        <div className='flex items-center justify-center h-full w-full md:w-7/12'>
          <Section className='w-[350px]'>
            
              <LoginForm />
              
            
           
          </Section>
          
          
        </div>
      </div>
    </>
  );
}