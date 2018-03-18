import { parse } from 'qs';

const [ , protoQS ] = window.location.hash.split('?');
const qsMap = parse(protoQS);

const hackamirrorEnd = Date.parse('2018-03-17T07:00:00Z')

export const isCSSDay = 'cssday' in qsMap;
export const isMFM = 'mfm' in qsMap;
export const isFEVR = 'fevr' in qsMap;
export const isHack = isCSSDay && Date.now() < hackamirrorEnd;
