// Generated by gulp icon - do not modify manually

import * as React from 'react';

const iconList = [
  'back',
  'clock',
  'close',
  'heart',
  'heart-on',
  'more',
  'setting',
  'share',
  'play-white',
  'play',
  'wechat',
  'circle',
  'favorite',
];

export interface IconProps {
  color?: string;
  className?: string;
  height?: string | number;
  kind?: string | any;
  onClick?: () => void;
  preview?: boolean;
  size?: string | number;
  style?: any;
  width?: string | number;
  wrapperStyle?: any;
}
export default class Icon extends React.Component<IconProps, {}> {
  static defaultProps = {
    className: '',
    color: 'currentColor',
    size: '100%',
  };

  render() {
    const { kind, preview } = this.props;
    return preview ? this.renderPreview() : this.renderIcon(kind);
  }

  renderPreview() {
    return <div>{iconList.map(kind => this.renderPreviewKind(kind))}</div>;
  }

  renderIcon(kind: string) {
    const { wrapperStyle } = this.props;
    if (wrapperStyle) {
      return <div style={wrapperStyle}>{this.getIcon(kind)}</div>;
    }
    return this.getIcon(kind);
  }

  renderPreviewKind(kind: string) {
    return (
      <div key={kind}>
        <h3>&lt;Icon kind="{kind}" /&gt;</h3>
        {this.renderIcon(kind)}
      </div>
    );
  }

  getIcon(kind: string) {
    const { color, height, onClick, size, style, width, className } = this.props;

    switch (kind) {
      case 'back':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            className={className}
            viewBox="0 0 1024 1024"
          >
            <path d="M728.58,1024,222,512,728.58,0,802,71.85,366.54,512,802,952.15Z" />
          </svg>
        );

      case 'clock':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            className={className}
            viewBox="0 0 1024 1024"
          >
            <path d="M512,866.42c-195.73-1-353.59-160.48-352.59-356.21S319.9,156.62,515.63,157.62c195,1,352.6,159.38,352.59,354.41C867.48,708.17,708.13,866.7,512,866.42M512,970c253,0,458-205,458-458S765,54,512,54,54,259.05,54,512h0c0,253,205.05,458,458,458ZM371.9,391.34H541.53a51.33,51.33,0,0,1,50.89,51.77V684.78a50.89,50.89,0,0,1-101.78,0V494.9H371.9a51.79,51.79,0,0,1,0-103.56Z" />
          </svg>
        );
      case 'close':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            className={className}
            viewBox="0 0 1024 1024"
          >
            <path d="M946,144.77,880.61,78,512,446,143.39,78,78,144.77,445.85,512.09,78,879.26,143.39,946,512,578.06,880.61,946,946,879.26,578.15,512.09Z" />
          </svg>
        );

      case 'heart':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            className={className}
            viewBox="0 0 1024 1024"
          >
            <path d="M715.33,151c116.73,1.3,210.39,96.83,209.38,213.57A216.08,216.08,0,0,1,856,522.76a66.39,66.39,0,0,0-6.57,7L555.52,829.62A338.92,338.92,0,0,1,512,869.49a339.09,339.09,0,0,1-43.54-39.87L174.61,529.77a67.29,67.29,0,0,0-6.62-7.1,216.09,216.09,0,0,1-68.7-158.1C98.28,247.83,191.94,152.3,308.67,151a208.2,208.2,0,0,1,155.1,70.05,64.31,64.31,0,0,0,90.77,5.7,65.12,65.12,0,0,0,5.69-5.7A208.2,208.2,0,0,1,715.33,151m0-66.48A271.56,271.56,0,0,0,512,176.37,271.63,271.63,0,0,0,308.67,84.52c-153.13,1.55-276,126.91-274.54,280.05A281.83,281.83,0,0,0,124.19,572h-.46L422.4,876.62c29.87,30.46,59.73,60.93,89.6,60.93s59.73-30.47,89.6-60.93L900.27,572h-.45a281.88,281.88,0,0,0,90-207.39c1.48-153.13-121.41-278.49-274.54-280ZM900.27,572" />
          </svg>
        );
      case 'heart-on':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            className={className}
            viewBox="0 0 1024 1024"
          >
            <path d="M715.33,85.49A271.59,271.59,0,0,0,512,177.34,271.55,271.55,0,0,0,308.65,85.49c-153.12,1.56-276,126.92-274.52,280a281.94,281.94,0,0,0,90.05,207.4h-.45L422.4,877.59c29.87,30.46,59.73,60.92,89.6,60.92s59.73-30.46,89.62-60.92L900.28,572.93h-.47a282,282,0,0,0,90.06-207.4C991.36,212.4,868.46,87,715.33,85.49ZM900.27,572.93" />
          </svg>
        );
      case 'more':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            className={className}
            viewBox="0 0 1024 1024"
          >
            <path d="M512,99.29c227.93,0,412.71,184.78,412.71,412.71S739.93,924.71,512,924.71,99.29,739.93,99.29,512C99.56,284.18,284.18,99.56,512,99.29m0-65.16c-263.92,0-477.87,214-477.87,477.87S248.08,989.87,512,989.87,989.87,775.92,989.87,512,775.92,34.13,512,34.13ZM370.81,512a54.31,54.31,0,1,1-54.31-54.31h0A54.32,54.32,0,0,1,370.81,512Zm195.5,0A54.31,54.31,0,1,1,512,457.69h0A54.32,54.32,0,0,1,566.31,512Zm195.49,0a54.31,54.31,0,1,1-54.3-54.31h0A54.31,54.31,0,0,1,761.79,512Z" />
          </svg>
        );

      case 'setting':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            className={className}
            viewBox="0 0 1024 1024"
          >
            <path d="M512,742.2c-127.13.36-230.49-102.4-230.86-229.53s102.4-230.5,229.53-230.86S741.16,384.2,741.53,511.34V512C741.57,638.89,638.89,741.87,512,742.2Zm0-391.34a161.14,161.14,0,1,0,160.68,161.6c0-.15,0-.31,0-.46A161.1,161.1,0,0,0,512,350.86Zm91.82,656.07H420.18a34.44,34.44,0,0,1-34.25-31.09L373.68,853a363.35,363.35,0,0,1-86.87-50.4L174.49,853.4a34.37,34.37,0,0,1-44-14.21L38.69,679.7a34.59,34.59,0,0,1,9.71-45.3l99.81-71.95a369.37,369.37,0,0,1,0-101L48.39,389.58a34.57,34.57,0,0,1-9.71-45.29L130.49,184.8a34.32,34.32,0,0,1,44-14.13l112.34,50.84a362.77,362.77,0,0,1,86.85-50.42L385.93,48.21a34.44,34.44,0,0,1,34.25-31.14H603.82a34.44,34.44,0,0,1,34.25,31.09L650.33,171a362.77,362.77,0,0,1,86.85,50.42l112.35-50.79a34.33,34.33,0,0,1,44,14.21l91.82,159.49a34.6,34.6,0,0,1-9.71,45.3L875.81,461.6a367.15,367.15,0,0,1,0,101l99.81,71.95a34.6,34.6,0,0,1,9.71,45.3L893.51,839.3a34.4,34.4,0,0,1-44,14.22L737.21,802.68a363.84,363.84,0,0,1-87,50.31L638,975.87A34.46,34.46,0,0,1,603.82,1006.93Zm-152.47-69H572.67l11.27-113.17a34.48,34.48,0,0,1,23.28-29.28A296.5,296.5,0,0,0,709,736.36a34.27,34.27,0,0,1,37-5.58l103.5,46.85L910.1,672.27,818.2,606a34.57,34.57,0,0,1-13.66-34.81,300.38,300.38,0,0,0,0-118.36A34.58,34.58,0,0,1,818.2,418l91.9-66.27L849.46,246.39,746,293.22A34.29,34.29,0,0,1,709,287.66a296.54,296.54,0,0,0-101.79-59.09A34.5,34.5,0,0,1,584,199.29L572.69,86.1H451.35l-11.3,113.19a34.44,34.44,0,0,1-23.26,29.28A296.22,296.22,0,0,0,315,287.66a34.42,34.42,0,0,1-36.93,5.56L174.56,246.39,113.89,351.74,205.79,418a34.58,34.58,0,0,1,13.66,34.82,300.38,300.38,0,0,0,0,118.36A34.59,34.59,0,0,1,205.79,606l-91.92,66.27,60.67,105.36,103.51-46.85A34.35,34.35,0,0,1,315,736.36a296.4,296.4,0,0,0,101.77,59.07A34.41,34.41,0,0,1,440,824.71Z" />
          </svg>
        );
      case 'share':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            className={className}
            viewBox="0 0 1024 1024"
          >
            <path d="M510.64,990c-264-1.57-476.72-216.86-475.14-480.85C37.07,247.38,248.88,35.57,510.64,34a32.75,32.75,0,0,1,0,65.48C282.81,99.59,98.21,284.37,98.31,512.2S283.19,924.63,511,924.53,923.35,739.76,923.35,512a32.58,32.58,0,0,1,65.16,0C988.24,775.84,774.47,989.67,510.64,990ZM945.09,34H684.41a43.66,43.66,0,0,0,0,87.31H840.2l-360.28,362a43.79,43.79,0,0,0,0,61.73,43.26,43.26,0,0,0,61.18.26l.26-.26,360.26-362V339.64a43.45,43.45,0,0,0,86.89,0V34Z" />
          </svg>
        );

      case 'play-white':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            className={className}
            viewBox="0 0 1024 1024"
          >
            <polygon points="830 512 186 82.67 186 941.33 830 512" />
          </svg>
        );
      case 'empty':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            className={className}
            viewBox="0 0 1024 1024"
          >
            <path d="M421.65,572.49a55.9,55.9,0,1,0,55.9-55.9A55.93,55.93,0,0,0,421.65,572.49Zm86.1,0a30.1,30.1,0,1,1-30.1-30.1h0A30.07,30.07,0,0,1,507.75,572.49Z" />
            <path d="M658.35,327.19a81.75,81.75,0,1,0,81.7,81.8h0A81.94,81.94,0,0,0,658.35,327.19Zm0,137.7a55.9,55.9,0,1,1,55.9-55.9h0a56,56,0,0,1-55.9,55.9Z" />
            <path d="M266.75,211c0,2.2.1,4.4.3,6.5l.1,2h0A142,142,0,0,0,408.75,353c78.3,0,142-63.7,142-142a142.16,142.16,0,0,0-142-142C330.45,69.09,266.75,132.79,266.75,211Zm142-116.1a115.86,115.86,0,0,1,102.8,62.2,113.78,113.78,0,0,1,13.3,53.9,116.09,116.09,0,0,1-232,7h0l-.1-2.2c-.1-1.6-.2-3.2-.2-4.8a116.28,116.28,0,0,1,116.2-116.1Z" />
            <path d="M368.55,464.89a12.91,12.91,0,1,0,.8-25.8h-24.6a12.91,12.91,0,0,0-.8,25.8h24.6Z" />
            <path d="M262.45,439.09a12.91,12.91,0,0,0,0,25.8h23.9a12.91,12.91,0,0,0,0-25.8Z" />
            <path d="M315.55,517.89a12.93,12.93,0,0,0,12.9-12.9h0v-23.9a12.9,12.9,0,1,0-25.8,0V505a12.8,12.8,0,0,0,12.9,12.9Z" />
            <path d="M315.55,435.79a12.93,12.93,0,0,0,12.9-12.9V399a12.9,12.9,0,1,0-25.8,0h0v23.9A12.87,12.87,0,0,0,315.55,435.79Z" />
            <path d="M813.25,550.89a12.91,12.91,0,0,0,0-25.8h-33.5a12.91,12.91,0,0,0,0,25.8Z" />
            <path d="M692.75,525.09a12.91,12.91,0,0,0-.8,25.8h34.2a12.91,12.91,0,1,0,.8-25.8h-34.2Z" />
            <path d="M753,551.89a12.93,12.93,0,0,0-12.9,12.9h0v33.5a12.9,12.9,0,1,0,25.8,0v-33.5A12.93,12.93,0,0,0,753,551.89Z" />
            <path d="M765.85,477.79a12.9,12.9,0,1,0-25.8,0v33.4a12.9,12.9,0,1,0,25.8,0Z" />
            <path d="M287.75,91.09a12.94,12.94,0,0,0,18.3-18.3l-51.6-51.6a12.94,12.94,0,0,0-18.3,18.3Z" />
            <path d="M331.35,77.69a12.93,12.93,0,0,0,12.9-12.9V13.09a12.91,12.91,0,1,0-25.8-.8v52.3A12.91,12.91,0,0,0,331.35,77.69Z" />
            <path d="M228.05,129.29h51.6a12.9,12.9,0,1,0,0-25.8h-51.6a12.9,12.9,0,0,0,0,25.8Z" />
            <path d="M946.55,668.19h0a447.61,447.61,0,0,0,8.6-87.2c0-219.7-163.9-408.3-381.1-438.8a12.93,12.93,0,0,0-3.6,25.6c204.6,28.7,358.9,206.4,358.9,413.3a411.64,411.64,0,0,1-7.2,76.7c-19.4,11.9-40.8,22.3-66,22.3-39.5,0-58.9-11.7-79.4-24-21.6-13-46.1-27.7-92.7-27.7s-71,14.7-92.7,27.7c-20.5,12.3-40,24-79.4,24s-58.9-11.7-79.4-24c-21.6-13-46.1-27.7-92.7-27.7s-71.1,14.7-92.7,27.7c-20.6,12.3-39.9,24-79.4,24-25.2,0-46.6-10.3-66-22.3a429.31,429.31,0,0,1-7.2-76.7c0-125.4,55.8-243,153-322.7a12.93,12.93,0,1,0-16.4-20c-103.1,84.6-162.3,209.5-162.3,342.7a447.61,447.61,0,0,0,8.6,87.2l.1.3h0a440.37,440.37,0,0,0,60.4,150h0l.3.4h0a442.65,442.65,0,0,0,95,106.5l.2.1h.1a442.81,442.81,0,0,0,557.2,0l.2-.1.1-.1h0A443.67,443.67,0,0,0,886,819h0l.3-.4a440.37,440.37,0,0,0,60.4-150h0Zm-686.1,10c20.5-12.3,40-24,79.4-24s58.9,11.7,79.4,24c21.6,13,46.1,27.7,92.7,27.7s71.1-14.7,92.7-27.7c20.6-12.3,40-24,79.4-24s58.9,11.7,79.4,24c21.6,13,46.1,27.7,92.7,27.7,21.9,0,41.2-6.1,58.2-14.4a411.76,411.76,0,0,1-47.1,108.2,82.87,82.87,0,0,1-11.1.8c-39.4,0-58.9-11.7-79.4-24-21.6-13-46.1-27.7-92.7-27.7s-71.1,14.7-92.7,27.6c-20.5,12.3-40,24-79.4,24s-58.9-11.7-79.4-24c-21.6-13-46.1-27.7-92.7-27.7s-71.1,14.7-92.7,27.7c-20.6,12.3-39.9,24-79.4,24a82.87,82.87,0,0,1-11.1-.8,411.76,411.76,0,0,1-47.1-108.2c17.1,8.2,36.4,14.3,58.2,14.3C214.45,705.79,238.85,691.09,260.45,678.19Zm3.9,238.7c19.2-11.5,38.6-21.7,75.6-21.7,39.4,0,58.9,11.7,79.4,24,21.6,13,46.1,27.7,92.7,27.7s71.1-14.7,92.7-27.7c20.6-12.3,40-24,79.4-24,37,0,56.4,10.3,75.6,21.7a417.06,417.06,0,0,1-495.4,0Zm517-17.2c-1.5-.9-3.1-1.8-4.6-2.7-21.6-13-46.1-27.7-92.7-27.7s-71.1,14.7-92.7,27.6c-20.5,12.3-40,24-79.4,24s-58.9-11.7-79.4-24c-21.6-13-46.1-27.7-92.7-27.7s-71.1,14.7-92.7,27.7l-4.5,2.7a419.89,419.89,0,0,1-68.2-73.4c42.3-1.3,65.5-15.2,86-27.5s40-24,79.4-24,58.9,11.7,79.4,24c21.6,13,46.1,27.7,92.7,27.7s71.1-14.7,92.7-27.7c20.6-12.3,40-24,79.4-24s58.9,11.7,79.4,24,43.8,26.2,86.1,27.5a420.5,420.5,0,0,1-68.2,73.5Z" />
            <path d="M301.55,217.49a12.85,12.85,0,0,0,12.9,12.1h.8a12.87,12.87,0,0,0,12.1-13.6h0l-.1-1.7c-.1-1.1-.2-2.1-.2-3.2a81.81,81.81,0,0,1,81.8-81.7,12.9,12.9,0,0,0,0-25.8,107.74,107.74,0,0,0-107.6,107.5c0,1.7.1,3.3.2,5Z" />
          </svg>
        );
      case 'play':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            className={className}
            viewBox="0 0 1024 1024"
          >
            <defs>
              <linearGradient
                id="a"
                x1="829.02"
                y1="194.98"
                x2="195.54"
                y2="828.46"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#70befe" />
                <stop offset="1" stopColor="#1596ff" />
              </linearGradient>
            </defs>
            <circle cx="512" cy="512" r="512" fill="url(#a)" />
            <path
              d="M367.23,800.1a35.31,35.31,0,0,1-35.31-35.31V259.21a35.31,35.31,0,0,1,55.33-29.09l367.23,252.8a35.31,35.31,0,0,1,0,58.17L508.9,708.39a35.31,35.31,0,0,1-40-58.17L672.18,512,402.54,326.39v438.4A35.31,35.31,0,0,1,367.23,800.1Z"
              fill="#fff"
            />
          </svg>
        );
      case 'wechat':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            className={className}
            viewBox="0 0 1024 1024"
          >
            <path
              d="M552.38,144.19c-56.94-29.78-123.84-46.91-194.22-46.91-104.89,0-199.67,38.09-265.35,99.45C23.57,261.41-13.67,356.67,4.63,451,19.46,527.49,69,591.82,143.3,643.72L107.48,751.47l125.21-62.79c15.42,3.05,30.67,6.08,45.87,8.75,37.26,6.53,74.31,10.86,113,7.81-33.12-113.33,11.25-217.86,91.18-284.4,63.49-52.85,149.42-81.74,236.78-72C701,262.19,637.91,188.92,552.38,144.19ZM283.77,311.38a41.51,41.51,0,0,1-9.57,15.4c-8.27,8.31-19.43,12.15-31,12.45-15.17.4-31-5.35-41.67-15.15a41.53,41.53,0,0,1-10.25-14.42,39.72,39.72,0,0,1,10.24-45.14c10.68-9.75,26.51-15.46,41.69-15.06,11.54.3,22.7,4.12,31,12.37C286.59,274.17,289.74,294.76,283.77,311.38Zm250,2A41,41,0,0,1,525,326.77c-8.91,8.92-21.16,12.71-33.6,12.48-14.34-.28-28.94-5.88-39-15.11A41.55,41.55,0,0,1,443,311.53a39.82,39.82,0,0,1,9.35-47c10.05-9.21,24.68-14.79,39.05-15.06,12.47-.24,24.74,3.52,33.64,12.39C537.89,274.67,540.78,296.44,533.8,313.36Z"
              fill="#69cf3e"
            />
            <path
              d="M1024,631c0-41.46-12-80.71-33-115.54a270.59,270.59,0,0,0-47.45-58.1c-66.65-62.15-159.39-91.76-249.73-85.38-79.45,5.6-149.51,36.74-199.51,83.61A266.53,266.53,0,0,0,456.85,499c-26.58,38.71-41.74,83.84-41.74,132,0,73,34.76,139,91.36,186.25,48,40.09,111.81,66.66,183.43,72.48q14.72,1.18,29.86,1.2c35.67,0,71.64-9,107.47-18l98.24,53.8Q912,882,898.54,837.2C970.43,783.27,1024,711.74,1024,631ZM669.39,561a38.15,38.15,0,0,1-10.67,16.42,52.33,52.33,0,0,1-32.07,13.54c-12.48.74-25-3.16-34.4-12.5a41.67,41.67,0,0,1-10.59-17.21c-4.09-13.29-.52-27.82,10.64-39,9.37-9.37,21.92-13.27,34.38-12.52a52.22,52.22,0,0,1,32,13.62C669.94,533.69,673.51,548.07,669.39,561ZM866,562.52a38.55,38.55,0,0,1-10.17,14.87,52.53,52.53,0,0,1-34.2,13.73c-11.75.22-23.4-3.72-32.21-12.56a42.31,42.31,0,0,1-10.06-15.64c-4.91-13.8-1.52-29.15,10.1-40.82a43.55,43.55,0,0,1,32.15-12.58,52.46,52.46,0,0,1,34.15,13.73C867.5,534.07,870.94,549.21,866,562.52Z"
              fill="#69cf3e"
            />
          </svg>
        );
      case 'circle':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            className={className}
            viewBox="0 0 1024 1024"
          >
            <path d="M663.28,72.17a467.1,467.1,0,0,0-310.14,2.68l310.14,309Z" fill="#f1765a" />
            <path
              d="M74.32,669.4l311-309.82H72.56A467.16,467.16,0,0,0,74.32,669.4Z"
              fill="#f1dd5a"
            />
            <path d="M91,314.4h438.4L308.2,93.93A466.88,466.88,0,0,0,91,314.4Z" fill="#f1b35a" />
            <path d="M928.56,305.13A466.92,466.92,0,0,0,708.63,90.5v437Z" fill="#6c5af1" />
            <path
              d="M315.62,933.62V493L93.29,714.5A466.93,466.93,0,0,0,315.62,933.62Z"
              fill="#baf259"
            />
            <path
              d="M948,349.94,639,660.77H952.69A467.11,467.11,0,0,0,948,349.94Z"
              fill="#5a9ef1"
            />
            <path d="M673.72,948.1,361,636.52V951.91a467,467,0,0,0,312.75-3.81Z" fill="#5ef15a" />
            <path
              d="M934.74,705.94H494.89L718.42,928.78A466.85,466.85,0,0,0,934.74,705.94Z"
              fill="#5ae5f1"
            />
          </svg>
        );
      case 'favorite':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            className={className}
            viewBox="0 0 1024 1024"
          >
            <polygon
              points="937.19 245.36 512.12 490.96 511.63 490.96 86.81 245.36 511.88 0 937.19 245.36"
              fill="#5a9ef1"
            />
            <polygon
              points="961.5 287.43 961.5 778.39 536.2 1024 536.2 533.03 961.5 287.43"
              fill="#f1765a"
            />
            <polygon
              points="487.56 533.03 487.56 1024 62.5 778.39 62.5 287.43 487.56 533.03"
              fill="#f1dd5a"
            />
            f1dd5a" />
          </svg>
        );
      default:
        return null;
    }
  }
}
