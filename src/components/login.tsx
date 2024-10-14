import { h } from 'nest-jsx-template-engine';
import { Submit } from './submit';

export interface LoginProps {
  title: string,
  email?: string,
  password?: string,
  errors?: Record<string, string>
}

export function Login({ title, email = "", password = "", errors = {} }: LoginProps): string {

  const emailInputClasses = errors.email ? "form-control is-invalid" : "form-control";
  const passwordInputClasses = errors.password ? "form-control is-invalid" : "form-control";

  return <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" id="login-form-container">
    <h3 class="sub-header">{title}</h3>
    {errors.common ? <div class="alert alert-danger" role="alert">
      <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
      {errors.common}
    </div> : null}
    <form hx-post="/login" hx-target="#login-form-container">
      <div class="mb-3">
        <input name="email" type="email" value={email} class={emailInputClasses} id="login-email" placeholder="Email" />
        {errors.email ? <div class="invalid-feedback">{errors.email}</div> : null}
      </div>
      <div class="mb-3">
        <input name="password" type="password" value={password} class={passwordInputClasses} id="login-password" placeholder="Password" />
        {errors.password ? <div class="invalid-feedback">{errors.password}</div> : null}
      </div>
      <Submit title="Login" />
    </form>
  </div>
}