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
					<div className="">
						<Sitebar />
					</div>
					<div className="w-full z-50">
						<Header />
						<div className=" bg-[#FAFBFA] overflow-hidden  px-8 h-full mt-20">
							{children}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
