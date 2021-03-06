package com.akaskhune;

import android.app.Application;

import com.facebook.react.ReactApplication;
import cl.json.RNSharePackage;
import com.horcrux.svg.SvgPackage;
import com.wix.RNCameraKit.RNCameraKitPackage;
import com.rt2zz.reactnativecontacts.ReactNativeContacts;
// import org.reactnative.camera.RNCameraPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.imagepicker.ImagePickerPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.wix.RNCameraKit.RNCameraKitPackage;
import com.facebook.react.modules.i18nmanager.I18nUtil;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNSharePackage(),
            new SvgPackage(),
            new RNCameraKitPackage(),
            new ReactNativeContacts(),
            // new RNCameraPackage(),
            new PickerPackage(),
            new ImagePickerPackage(),
            new LinearGradientPackage()
            // new RNCameraKitPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
    sharedI18nUtilInstance.allowRTL(getApplicationContext(), false);
    SoLoader.init(this, /* native exopackage */ false);
  }
}
