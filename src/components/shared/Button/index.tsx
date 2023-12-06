import React, { FC } from 'react';
import { Button as LButton, CircularProgress } from '@mui/material';
import { disabledBTNText } from '@/theme/GlobalVariables';

interface ButtonProps {
  variant?: 'text' | 'contained' | 'outlined';
  children: React.ReactNode;
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  startIcon?: React.ReactNode;
  width?: string | any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  endIcon?: React.ReactNode;
  style?: React.CSSProperties;
  padding?: string;
  height?: string;
  radius?: string;
  sx?: React.CSSProperties;
  [x: string]: any;
  minHeight?: string;
  minWidth?: string;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  variant,
  children,
  color,
  startIcon,
  width,
  onClick,
  endIcon,
  style,
  padding,
  height,
  radius,
  minHeight,
  minWidth,
  disabled,
  loading,
  className,
  onKeyDown,
  ...restProps
}) => {
  return (
    <React.Fragment>
      <LButton
        sx={{
          borderRadius: radius ? radius : '8px',
          textTransform: 'none',
          height: height ? height : '44px',
          width: width ? width : '120px',
          fontSize: '14px',
          padding: padding ? padding : 'unset',
          minWidth: minWidth ? minWidth : '44px',
          minHeight: minHeight ? minHeight : '44px',
          // cursor: disabled ? 'not-allowed' : 'pointer',
        }}
        size='small'
        variant={variant}
        color={color}
        startIcon={startIcon}
        onClick={onClick}
        endIcon={endIcon}
        style={style}
        disabled={disabled}
        className={className}
        {...restProps}
      >
        {loading ? (
          <CircularProgress
            size={20}
            color={
              disabled
                ? 'primary'
                : variant === 'outlined'
                ? 'primary'
                : 'secondary'
            }
          />
        ) : (
          children
        )}
      </LButton>
    </React.Fragment>
  );
};
export default Button;
