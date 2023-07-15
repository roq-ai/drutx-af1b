interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Administrator', 'Finance Manager', 'Freight Forwarder', 'Sales Manager', 'Sales Executive'],
  tenantName: 'Organization',
  applicationName: 'drutx',
  addOns: ['chat', 'notifications', 'file'],
};
