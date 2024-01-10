import { HStack, Icon } from '@chakra-ui/react';
import { Platform } from '../../hooks/useGames';
import {FaWindows, FaApple, FaAndroid, FaLinux, FaXbox, FaPlaystation } from 'react-icons/fa'
import { SiNintendo } from "react-icons/si"; 
import {MdPhoneIphone} from 'react-icons/md'
import {BsGlobe} from 'react-icons/bs'
import { IconType } from 'react-icons';

interface Props {
    icon: Platform[]
}

function GameIcons({icon}: Props) {
  const iconMap: {[key:string]: IconType} ={
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    android: FaAndroid,
    nintendo: SiNintendo,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe
  }

  return (
    <HStack fontSize= '20px'>
       {icon.map((item) => 
       <Icon as= {iconMap[item.slug]} color= 'gray.500'/>)} 
    </HStack>
  )
}

export default GameIcons