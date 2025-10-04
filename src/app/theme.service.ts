import { Injectable, signal, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  darkMode = signal(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // Check localStorage for saved preference
      const savedTheme = localStorage.getItem("darkMode");
      if (savedTheme !== null) {
        this.darkMode.set(savedTheme === "true");
      }
      this.applyTheme();
    }
  }

  toggleDarkMode(): void {
    this.darkMode.set(!this.darkMode());
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("darkMode", this.darkMode().toString());
      this.applyTheme();
      console.log("Dark mode toggled to:", this.darkMode());
      console.log("Body classes:", document.body.className);
    }
  }

  isDarkMode(): boolean {
    return this.darkMode();
  }

  private applyTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const isDark = this.darkMode();
      if (isDark) {
        document.body.classList.add("dark-mode");
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.body.classList.remove("dark-mode");
        document.documentElement.setAttribute("data-theme", "light");
      }
      console.log(
        "Applied theme. Dark mode:",
        isDark,
        "Classes:",
        document.body.className,
      );
    }
  }
}
