import { useRouter } from 'next/router';

export const useToContact = () => {
  const router = useRouter();
  return () => {
    router.push('/contact');
  };
};
