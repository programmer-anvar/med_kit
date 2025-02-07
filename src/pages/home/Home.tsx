import { useTodoListCache } from '@/services/home';
// import { useHomeFeatures } from './features';

const Home = () => {
	const {
		data: { data: todos },
	} = useTodoListCache();
	// const { getSum } = useHomeFeatures();
	console.log(todos);
	return (
		<div>
			{/* {isLoading ? (
				<div>Loading...</div>
			) : (
				todos?.map((el) => (
					<h1 className="text-center" key={el?.id}>
						{el?.id}
					</h1>
				))
			)} */}
		</div>
	);
};

export default Home;
