import { MenuItem, ContactInfo } from "@/lib/types";

export const menuItems: MenuItem[] = [
  {
    name: "徽州臭鳜鱼",
    description: "古法腌制，闻臭食香",
    price: 168,
    image: "/images/徽州臭鳜鱼.jpg",
  },
  {
    name: "问政山笋",
    description: "腊肉清炖，脆嫩回甘",
    price: 78,
    image: "/images/问政山笋.jpeg",
  },
  {
    name: "皖南刀板香",
    description: "土猪肉腌晒，咸鲜透亮",
    price: 98,
    image: "/images/皖南刀板香.jpeg",
  },
  {
    name: "毛豆腐",
    description: "铁板煎制，外酥里嫩",
    price: 48,
    image: "/images/毛豆腐.jpg",
  },
  {
    name: "笋干烧肉",
    description: "皖南山笋配五花，浓油赤酱",
    price: 88,
    image: "/images/笋干烧肉.jpeg",
  },
  {
    name: "老母鸡菌汤",
    description: "炭火慢煨3小时",
    price: 128,
    image: "/images/老母鸡菌汤.jpeg",
  },
];

export const contactInfo: ContactInfo = {
  name: "安徽老薛饭店",
  address: "上海市松江区九亭镇寅青路495号",
  phone: "19955474680",
  hours: "9:00 ~ 22:00",
};

export const navLinks = [
  { label: "首页", href: "/" },
  { label: "店面展示", href: "/gallery" },
  { label: "菜品展示", href: "/menu" },
  { label: "联系我们", href: "/contact" },
];
