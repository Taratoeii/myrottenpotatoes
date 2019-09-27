Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '500972660737616', '8022fd75954d3187d25921d2def65284'
  provider :twitter, '8U5nX2nLPmHk2DlVGAVmyviIU' , 'ED8FXL3RDP3s0uC1tUz6AThYDYPhakH9vQRWdTnVCD9jRhTOiF'
end

def OmniAuth.login_path(provider)
    "/auth/#{provider}"
end