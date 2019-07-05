import React, { Component } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
	padding-bottom: 3rem;
	width: 960px;
	margin: 0 auto;
`;

class NewsList extends Component {
	render() {
		const { loading, articles } = this.state;

		if (loading || !articles)
			return (
				<NewsListBlock>
					<div>로딩중입니다...</div>
				</NewsListBlock>
			);

		return (
			<NewsListBlock>
				{articles.map(article => (
					<NewsItem key={article.url} article={article} />
				))}
			</NewsListBlock>
		);
	}
}

export default NewsList;
