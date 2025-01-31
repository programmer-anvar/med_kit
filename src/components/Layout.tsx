import React, { ReactNode } from 'react';
import Sitebar from './sitebar/Sitebar';
import Header from './header/Header';

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		// eslint-disable-next-line react/jsx-filename-extension
		<>
			<div className="  ">
				<div className="flex h-full ">
					<Sitebar />
					<div className="w-full">
						<Header />
						<div className="w-full bg-[#FAFBFA] overflow-hidden  px-8 py-[25px] h-full">
							{children}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
