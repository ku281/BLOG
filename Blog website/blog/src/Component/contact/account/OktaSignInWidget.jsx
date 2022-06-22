/*import React ,{useEffect,useRef} from 'react';
import OktaSignIn from  '@okta/okta-signin-widget';
import '@okta/okta-sign-widget/dist/css/okta-sign-in.min.css';
import { oktaSignInConfig } from './config';

const OktaSignInwidget =({config,onSuccess,onError})=>{
    const widgetRef =useRef();
    useEffect(()=>{
        if(!widgetRef.current)
        return false;
        const widget =new OktaSignIn(config);
        widget.showSignIn(config);
        widget.showSignInToGetTokens({
            el:widgetRef.current,
        }).then(onSuccess).catch(onError);
        return ()=>widget.remove();
    },[config,onsuccess,onError]);
    return (<div ref={widgetRef}/>);

        };
        export default OktaSignInwidget;
        */
        import React, { useEffect, useRef } from 'react';
        import OktaSignIn from '@okta/okta-signin-widget';
        import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
        
        const OktaSignInWidget = ({ config, onSuccess, onError }) => {
          const widgetRef = useRef();
          useEffect(() => {
            if (!widgetRef.current)
              return false;
            
            const widget = new OktaSignIn(config);
        
            widget.showSignInToGetTokens({
              el: widgetRef.current,
            }).then(onSuccess).catch(onError);
        
            return () => widget.remove();
          }, [config, onSuccess, onError]);
        
          return (<div ref={widgetRef} />);
        };
        export default OktaSignInWidget;