import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type Props = {
	children: React.ReactNode;
	Key: any;
};

const Transition = ({ children, Key }: Props) => {
	return (
		<AnimatePresence exitBeforeEnter={true}>
			<motion.div
				key={Key}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default Transition;
