import React, { ReactNode } from 'react';
import ReactHtmlParser from 'react-html-parser';

interface BlogTextComponentProps {
  html: string;
}

const BlogTextComponent: React.FC<BlogTextComponentProps> = ({ html }) => {
  return <div>{ReactHtmlParser(html)}</div>;
};

export default BlogTextComponent;
