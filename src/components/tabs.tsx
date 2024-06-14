import React, { useState, ReactNode, MouseEvent } from 'react';

type TabProps = {
  id: string;
  label: string;
  children: ReactNode;
  className?: string; 
  icon?: string;
  iconActive?: string;
  type?: string;
};

const Tab = ({label, icon, children, type }: TabProps) => {
  return (
    <div className="hidden" role="tabpanel" aria-labelledby={label}>
      {!type && <img src={icon} alt={`${label} icon`} />}
      {label}
      {children}
    </div>
  );
};

type TabsProps = {
  children: ReactNode[];
  className?: string;
  type?: string;
};

const Tabs = ({ children, type }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>((children[0] as React.ReactElement<TabProps>).props.label);

  const handleClick = (e: MouseEvent<HTMLButtonElement>, newActiveTab: string) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className=" flex flex-wrap justify-center mx-auto">
      <div className={`${!type? 'flex-col': ''} lg:flex-row inline-flex mb-10 py-[0.375em] bg-tab-bg bg-opacity-70 rounded-3xl`}>
        {children.map((child) => {
          const tab = child as React.ReactElement<TabProps>;
          return (
            <button
            
              key={tab.props.label}
              className={`md:w-auto ${activeTab === tab.props.label ? 'rounded-3xl bg-[#98FFF9] text-[#03082F] mx-1 px-1 md:mx-2 md:px-4' : 'text-[#98FFF9] mx-1 px-1 md:mx-2 md:px-4'}  font-medium whitespace-nowrap`}
              onClick={(e) => handleClick(e, tab.props.label)}
              aria-selected={activeTab === tab.props.label}
            >
              <div className="flex items-center">
                {!type && <img src={activeTab === tab.props.label ? tab.props.iconActive : tab.props.icon} alt={`${tab.props.label} icon`} />}
                <span className="px-4 py-2">{tab.props.label}</span>
              </div>
            </button>
          );
        })}
      </div>
      <div className="py-4">
        {children.map((child) => {
          const tab = child as React.ReactElement<TabProps>;
          if (tab.props.label === activeTab) {
            return (
              <div key={tab.props.label} role="tabpanel" aria-labelledby={tab.props.label}>
                {tab.props.children}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export { Tabs, Tab };
