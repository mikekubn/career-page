import React from 'react';
import Link from 'next/link';
import { menuItemConfig } from 'src/configs/navigation';
import { motion, useCycle } from 'framer-motion';

const Navigation = (): React.ReactElement => (
  <nav data-cy="navigation" className="flex flex-row justify-end">
    <ul className="flex flex-row">
      {menuItemConfig.map((nav) => (
        <Link key={nav.url} href={nav.url} passHref>
          <li className="mb-2 mx-4 text-lg cursor-pointer hover:font-semibold" key={nav.url}>
            {nav.name}
          </li>
        </Link>
      ))}
    </ul>
  </nav>
);

// export const MobileNavigation = (): React.ReactElement => {
//   const [isOpen, toggleOpen] = useCycle(false, true);
//   const containerRef = React.useRef(null);

//   return (
//     <motion.nav initial={false} ref={containerRef} animate={isOpen ? 'open' : 'closed'}>
//       <motion.div className={`absolute w-full h-screen left-full botom-0 top-0 bg-white`} variants={sidebar} />
//       <MenuList />
//       <MenuToggle toggle={() => toggleOpen()} />
//     </motion.nav>
//   );
// };

// const MenuList = (): React.ReactElement => (
//   <motion.ul className="absolute top-100">
//     {menuItemConfig.map((nav) => (
//       <Link key={nav.url} href={nav.url} passHref>
//         <li className="mb-2 mx-4 text-lg cursor-pointer hover:font-semibold">{nav.name}</li>
//       </Link>
//     ))}
//   </motion.ul>
// );

// const Path = (props: Record<string, unknown>) => (
//   <motion.path
//     fill="transparent"
//     strokeWidth="3"
//     stroke="hsl(0, 0%, 18%)"
//     strokeLinecap="round"
//     {...props}
//     className="translate-x-px translate-y-px"
//   />
// );

// const MenuToggle = ({ toggle }: { toggle: () => void }): React.ReactElement => (
//   <button onClick={toggle} className="absolute cursor-pointer w-10 h-10 top-5 right-5 rounded-full shadow-md shadow-black">
//     <svg width="23" height="23" viewBox="0 0 23 23" className="m-auto w-5">
//       <Path
//         variants={{
//           closed: { d: 'M 2 2.5 L 20 2.5' },
//           open: { d: 'M 3 16.5 L 17 2.5' },
//         }}
//       />
//       <Path
//         d="M 2 9.423 L 20 9.423"
//         variants={{
//           closed: { opacity: 1 },
//           open: { opacity: 0 },
//         }}
//         transition={{ duration: 0.1 }}
//       />
//       <Path
//         variants={{
//           closed: { d: 'M 2 16.346 L 20 16.346' },
//           open: { d: 'M 3 2.5 L 17 16.346' },
//         }}
//       />
//     </svg>
//   </button>
// );

export default Navigation;

// const sidebar = {
//   open: (height = 1000) => ({
//     clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
//     transition: {
//       type: 'spring',
//       stiffness: 20,
//       restDelta: 2,
//     },
//   }),
//   closed: {
//     clipPath: 'circle(20px at 40px 40px)',
//     transition: {
//       delay: 0.5,
//       type: 'spring',
//       stiffness: 400,
//       damping: 40,
//     },
//   },
// };
