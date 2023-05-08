import React from 'react'
import { Layout } from 'antd'
import TheHeader from "../../common/TheHeader";
import TheSidebar from "../../common/TheSidebar";
import _nav from '../../../_mock/nav.d'
import TheContent from "../../common/TheContent";
import TheLayout from "../../common/TheLayout";
import TheFooter from "../../common/TheFooter";

const PublicLayout = () => {
	// useEffect(() => {
	//   if (localStorage.getItem("token") === null || localStorage.getItem("role") === null
	//     || localStorage.getItem("role").includes("Quản trị nhân sự") === undefined) {
	//     history.push("/login");
	//   } else {
	//     role.current = localStorage.getItem("role").includes("Quản trị nhân sự")
	//   }
	//   if (role.current) {
	//     setNav(navigation)
	//   } else {
	//     setNav(navigationForLead)
	//   }
	//
	// }, [])

	return (
		<Layout>
			<TheHeader />
			<Layout>
				<TheSidebar nav={_nav} />
				<Layout>
					<TheContent />
				</Layout>
			</Layout>
		</Layout>
	)
}
export default PublicLayout
