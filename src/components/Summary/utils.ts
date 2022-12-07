import { convertMsToTime } from '../../utils';

export const getTestPercentage = (
  total: number,
  passed: number,
  failed: number,
  skipped: number
) => {
  return {
    passed: (passed / total) * 100,
    failed: (failed / total) * 100,
    skipped: (skipped / total) * 100
  };
};

export interface IEnvironmentDropdownData {
  name: string;
  meta: {
    device: string;
    browserName: string;
    browserVersion: number;
    operatingSystemName: string;
    tags: string[];
    time: {
      hour?: number;
      min?: number;
      sec?: number;
    };
  };
  testResult: {
    passed: number;
    failed: number;
    skipped: number;
  };
}

// TODO: replace any with it's type
export const getEnvironmentDropDownData = (environments: Record<string, any>) => {
  const reverseSortedEnv = Object.entries(environments).sort(
    ([, a], [, b]) => b.stats.failed - a.stats.failed
  );

  const resultData: any = [];

  reverseSortedEnv.forEach((environment, index) => {
    const envDropdownData: any = {};
    const { device, browserName, browserVersion, platformName, time, executionMode } =
      environment[1].metadata;
    const { stats } = environment[1];
    const { hours, minutes, seconds } = convertMsToTime(time).time;

    envDropdownData['name'] = `Environment ${index + 1}`;
    envDropdownData['meta'] = {
      device: device,
      browserName: browserName,
      browserVersion: browserVersion,
      operatingSystemName: platformName,
      tags: [executionMode],
      time: {
        hour: hours,
        min: minutes,
        sec: seconds
      }
    };

    envDropdownData['testResult'] = stats;

    resultData.push(envDropdownData);
  });

  console.log('......', resultData);

  return resultData;
};
