import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ListItemProps {
  text: string;
}

export const ListItem: React.FC<ListItemProps> = ({ text }) => (
  <li className="flex items-center text-gray-600">
    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
    {text}
  </li>
);

export const ProgramList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item, index) => (
      <ListItem key={index} text={item} />
    ))}
  </ul>
);
