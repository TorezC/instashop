import { faArrowLeft, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';

interface HeaderProps {
    name: string
    show?: boolean
    link: string
}
const Header = ({ name, show, link }: HeaderProps) => {
    return (
        <div className='flex w-full justify-between items-center'>
            <div className='flex items-center gap-3'>
                <Link href={link}>
                <FontAwesomeIcon icon={faArrowLeft} color='#00000099' />
                </Link>
                <span>{name}</span>
            </div>
            <div>{show && <FontAwesomeIcon icon={faEllipsisVertical} />}</div>
        </div>
    )
}

export default Header