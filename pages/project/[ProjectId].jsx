import { useRouter } from 'next/router'

const ProjectId = () => {
	const router = useRouter()
	const { ProjectId } = router.query

	return (
		<div>
			<div>This is the projects page {ProjectId}</div>
		</div>
	)
}

export default ProjectId
