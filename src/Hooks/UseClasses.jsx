import { useQuery } from "@tanstack/react-query";



const UseClasses = () => {
   

    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await fetch('https://harmony-harbor-backend.vercel.app/classes');
            return res.json();
        }
    })

    return [classes, loading,refetch]
};

export default UseClasses;