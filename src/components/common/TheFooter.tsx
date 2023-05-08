import { Card } from "antd";
import { useTranslation } from "react-i18next";
import React from "react";

const TheFooter = () => {
	const { t } = useTranslation();
	return (
		<Card style={{ marginTop: 10, textAlign:'center' }}>{t('card.footer')}</Card>
	)
};
export default TheFooter;
