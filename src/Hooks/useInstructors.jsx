import { useQuery } from "@tanstack/react-query";



const Useinstructors = () => {
   

    const {data: instructors = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['instructors'],
        queryFn: async() => {
            const res = await fetch('https://harmony-harbor-backend.vercel.app/instructors');
            return res.json();
        }
    })

    return [instructors, loading,refetch]
};

export default Useinstructors;