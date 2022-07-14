import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import type { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

library.add(fas);
library.add(fab);

type Props = {
  iconName: IconName;
  iconType: IconPrefix;
};

const Icon = ({ iconName, iconType }: Props): JSX.Element =>
  (
    <div>
      <FontAwesomeIcon icon={[iconType, iconName]} />
    </div>
  );

export default Icon;
